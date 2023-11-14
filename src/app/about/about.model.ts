export class About {
  public fullName;
  public phone;
  public email;
  public address;
  public description;
  public birthDate;

  constructor(
    fullName: string,
    phone: string,
    email: string,
    address: string,
    description: string,
    birthDate: string
  ) {
    (this.fullName = fullName),
      (this.phone = phone),
      (this.email = email),
      (this.address = address),
      (this.description = description),
      (this.birthDate = birthDate);
  }
}
