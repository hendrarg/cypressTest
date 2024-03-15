describe("Login Variable Test", () => {
  //Fungsi untuk login
  const login = (username, password) => {
    //Halaman menu
    cy.visit("https://katalon-demo-cura.herokuapp.com");
    // Click Make Appointment
    cy.get("#btn-make-appointment").click();
    // Isi formulir login
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    // Klik tombol login
    cy.get('button[type="submit"]').click();
  };

  it("Login with invalid credentials", function () {
    // Gunakan variabel untuk menyimpan informasi login yg salah
    const invalidUsername = "John Doe";
    const invalidPassword = "ThisIsNotAPasswor";
    //Lakukan Login
    login(invalidUsername, invalidPassword);
    // Periksa login fail
    cy.get("p.lead.text-danger").should("contain", "Login failed! Please ensure the username and password are valid.");
  });

  it("Login to the Katalon Demo Cura website", function () {
    // Gunakan variabel untuk menyimpan informasi login
    const username = "John Doe";
    const password = "ThisIsNotAPassword";
    //Lakukan Login
    login(username, password);
    // Periksa login berhasil
    cy.url().should("include", "#appointment");
    cy.get("h2").should("contain", "Make Appointment");
  });
});
