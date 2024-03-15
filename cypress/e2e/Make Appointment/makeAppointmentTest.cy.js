describe("Login and Make Appointment", () => {
  //Fungsi untuk login
  const login = (username, password) => {
    //Buka Halaman Login
    cy.visit("https://katalon-demo-cura.herokuapp.com");
    // Click Make Appointment
    cy.get("#btn-make-appointment").click();
    // Isi formulir login
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    // Klik tombol login
    cy.get('button[type="submit"]').click();
    // Periksa login berhasil
    cy.url().should("include", "#appointment");
    cy.get("h2").should("contain", "Make Appointment");
  };

  it("Login to the Katalon Demo Cura website and Make Appointment", function () {
    //Lakukan Login terlebih dahulu
    login("John Doe", "ThisIsNotAPassword");
    // Pilih fasilitas
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
    //checklist
    cy.get('input[name="hospital_readmission"').check();
    //radio buttons
    cy.get("#radio_program_none").check();
    // Pilih tanggal
    cy.get("#txt_visit_date").click();
    // Pilih tanggal di kalender
    cy.get("tbody > :nth-child(3) > :nth-child(4)").click();
    // Commetn
    cy.get("#txt_comment").type("Test Make Appointment");
    // Click Button Book Appointment
    cy.get("#btn-book-appointment").click();
    // Periksa login berhasil
    cy.url().should("include", "appointment.php#summary");
    cy.get("h2").should("contain", "Appointment Confirmation");
  });
});
