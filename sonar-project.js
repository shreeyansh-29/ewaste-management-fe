const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.login": "admin",
      "sonar.password": "Thala@3107",
      "sonar.sources": ".",
      "sonar.inclusions": "src/**", // Entry point of your code
    },
  },
  (r) => {
    console.log(r);
  }
);
