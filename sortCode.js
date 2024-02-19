function isValidSortCode(str) {
    const regex = /^\d{2}-\d{2}-\d{2}$/;
    const sortCode = regex.test(str);
    return sortCode
  }
  