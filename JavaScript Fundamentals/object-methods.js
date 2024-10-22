const rafay = {
  firstName: "Abdul",
  lastName: "Rafay",
  birthYear: 2002,
  hasDriverLicense: true,
  status: "Student",

  calAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${rafay.lastName} is a ${rafay.calAge()} year old ${
      rafay.status
    }, and he has ${rafay.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(rafay.getSummary());
