package com.lpw.getfed.services;

import com.lpw.getfed.models.SubCategory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Qualifier("sub-category-service")
public interface SubCategoryService {

    List<SubCategory> getSubCategories();
    SubCategory getSubCategoryById(Long id);
    SubCategory addSubCategory(SubCategory subCategory);
}
