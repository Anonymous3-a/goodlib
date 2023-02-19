#include <iostream>

auto print(auto text) {
  std::cout << text;
  return text;
}

auto prtln(auto text) {
  std::cout << text << "\n";
  return text;
}
