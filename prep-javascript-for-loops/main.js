// create your loops here.
for (var count = 0; count < 10; count++) {
  console.log(count);
}

for (var two = 0; two < 19; two += 2) {
  console.log(two);
}

// eslint-disable-next-line for-direction
for (var hundred = 100; hundred <= 100; hundred--) {
  console.log('Time till explosion', hundred);
  if (hundred === 0) break;
}
