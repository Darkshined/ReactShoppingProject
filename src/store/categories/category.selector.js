export const selectCurrentCategory = (state) => {
    const categoriesMap = state.category.currentCategories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    );
    return categoriesMap;
  };

export default selectCurrentCategory;