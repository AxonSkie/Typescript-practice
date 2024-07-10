function calculateTax (income : number): number{
      if (income < 50_000)
        return income * 2;
    return income *3;
}