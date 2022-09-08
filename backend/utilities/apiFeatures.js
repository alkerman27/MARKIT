class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(this.query);
    this.query = this.query.find({ ...keyword });
    console.log("utility", this);
    return this;
  }
}

module.exports = APIFeatures;
