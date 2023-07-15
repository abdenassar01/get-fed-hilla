package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.SubCategory;
import com.lpw.getfed.repositories.SubCategoryRepository;
import com.lpw.getfed.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("sub-category-service")
public class SubCategoryServiceImplementation implements SubCategoryService {

    private final SubCategoryRepository repository;

    @Autowired
    public SubCategoryServiceImplementation(SubCategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public SubCategory addSubCategory(SubCategory subCategory) {
        return repository.save(subCategory);
    }

    @Override
    public List<SubCategory> getSubCategories() {
        return repository.findAll();
    }

    @Override
    public SubCategory getSubCategoryById(Long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find sub category with id: " + id));
    }
}
