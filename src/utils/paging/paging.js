const resolvePageNumber = (items, currentPage) => {
  if (items.length === 1 && currentPage > 1) {
    return currentPage - 1;
  }

  if (currentPage < 1) {
    return 1;
  }

  return currentPage;
};

export default {
  resolvePageNumber,
};
