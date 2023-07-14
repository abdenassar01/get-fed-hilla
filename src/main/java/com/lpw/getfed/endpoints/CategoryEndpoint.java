package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.SubCategory;
import com.lpw.getfed.services.CategoryService;
import com.lpw.getfed.services.SubCategoryService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class CategoryEndpoint {
    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final CategoryService service;
    private final SubCategoryService subCategoryService;

    @Autowired
    public CategoryEndpoint(CategoryService service, SubCategoryService subCategoryService) {
        this.service = service;
        this.subCategoryService = subCategoryService;
    }

    public Category addCategory(Category category){
        logger.info("Added a new category named: " + category.getLabel());
        return service.addCategory(category);
    }

    public SubCategory addSubCategory(SubCategory subCategory){
        logger.info("Added a new sub category named: " + subCategory.getTitle());
        return subCategoryService.addSubCategory(subCategory);
    }

    public String removeCategory(Category category){
        logger.warn("removed category named: " + category.getLabel());
        return service.removeCategory(category);
    }

    public Category removeCategoryById(Long id){
        logger.warn("removed category by id: " + id);
        return service.removeCategoryById(id);
    }

    public Category updateCategory(Long id, Category category){
        logger.info("updating the category " + id + " infos");
        return service.updateCategory(id, category);
    }

    public List<Category> getCategories(){
        logger.info("getting all categories");
        return service.getCategories();
    }

    public List<SubCategory> getSubCategories(){
        logger.info("getting all sub categories");
        return subCategoryService.getSubCategories();
    }

    public SubCategory getSubCategoryById(Long id){
        logger.info("getting sub categories: " + id );
        return subCategoryService.getSubCategoryById(id);
    }
}
