function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex < 0 || pageIndex >= this.pageCount()) {
    return -1;
  }

  if (this.collection.length % this.itemsPerPage === 0) {
    return this.itemsPerPage;
  }

  if (pageIndex === this.pageCount() - 1) {
    return this.collection.length % this.itemsPerPage;
  }

  return this.itemsPerPage;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.collection.length) {
    return -1;
  }

  return Math.floor((itemIndex + 1) / this.itemsPerPage);
};
