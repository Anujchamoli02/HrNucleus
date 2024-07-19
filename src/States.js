// CountryService.js

const StatesServices = {
  getCountries() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const states = [
          { name: "Andaman & Nicobar (UT)" },
          { name: "Andhra Pradesh" },
          { name: "Arunachal Pradesh" },
          { name: "Assam" },
          { name: "Bihar" },
          { name: "Chandigarh (UT)" },
          { name: "Chhattisgarh" },
          { name: "Dadra & Nagar Haveli and Daman & Diu (UT)" },
          { name: "Delhi " },
          { name: "Goa" },
          { name: "Gujarat" },
          { name: "Haryana" },
          { name: "Himachal Pradesh" },
          { name: "Jammu & Kashmir (UT)" },
          { name: "Jharkhand" },
          { name: "Karnataka" },
          { name: "Kerala" },
          { name: "Ladakh (UT)" },
          { name: "Lakshadweep (UT)" },
          { name: "Madhya Pradesh" },
          { name: "Maharashtra" },
          { name: "Manipur" },
          { name: "Meghalaya" },
          { name: "Mizoram" },
          { name: "Nagaland" },
          { name: "Odisha" },
          { name: "Puducherry (UT)" },
          { name: "Punjab" },
          { name: "Rajasthan" },
          { name: "Sikkim" },
          { name: "Tamil Nadu" },
          { name: "Telangana" },
          { name: "Tripura" },
          { name: "Uttar Pradesh" },
          { name: "Uttarakhand" },
          { name: "West Bengal" },
        ];

        resolve(states);
      }, 1000); // Simulating delay for API call
    });
  },
};

export default StatesServices;
