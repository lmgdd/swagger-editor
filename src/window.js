let win = {
  navigator: {
    userAgent: "fake!"
  },
  document: {
    getElementById() {},
    addEventListener() {},
    removeEventListener() {},
    documentElement: {
      setAttribute() {},
    }
  },
}

if(typeof window !== "undefined") {
  win = window
}
alert('aaa')

export default win
