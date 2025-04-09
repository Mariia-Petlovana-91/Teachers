export const selectFilteredTeachers = (state) => {
  const { selectedLanguage, selectedLevel, selectedPrice } = state.filters;
  const { teachersData } = state.teachers;

  return teachersData.filter((teacher) => {
    return (
      (!selectedLanguage || teacher.languages.includes(selectedLanguage)) &&
      (!selectedLevel || teacher.levels.includes(selectedLevel)) &&
      (!selectedPrice || teacher.price_per_hour.includes(selectedPrice))
    );
  });
};
