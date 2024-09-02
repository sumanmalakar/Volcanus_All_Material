const print_1_To_N = (n) => {
  if (n > 5) return;

  console.log(n);

  print_1_To_N(n 1);
};
print_1_To_N(1);
