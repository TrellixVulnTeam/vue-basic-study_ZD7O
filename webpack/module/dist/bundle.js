;(() => {
  var e = {
      151: e => {
        e.exports = {
          logInput: e => `입력받은 값 ${e}`,
          logResult: (e, o) => `${e}의 넓이는 :  ${o} 입니다.`,
          logFigureError:
            "지원되지 않는 도형입니다. '정사각형'  또는 '원' 을 입력해주세요."
        }
      },
      786: e => {
        e.exports = {
          PI: 3.14,
          getCircleArea: e => e * e * 3.14,
          getSquareArea: e => e * e
        }
      },
      521: e => {
        "use strict"
        e.exports = require("readline")
      }
    },
    o = {}
  function r(t) {
    var s = o[t]
    if (void 0 !== s) return s.exports
    var l = (o[t] = { exports: {} })
    return e[t](l, l.exports, r), l.exports
  }
  ;(() => {
    const e = r(521).createInterface({
        input: process.stdin,
        output: process.stdout
      }),
      { getCircleArea: o, getSquareArea: t } = r(786),
      { logInput: s, logResult: l, logFigureError: c } = r(151)
    e.question(
      "넓이를 구하고자 하는 도형의 종류를 입력해주세요(정사각형 ,원 ) : ",
      r => {
        switch ((console.log(`선택된 도형 ${r}`), r)) {
          case "정사각형":
            e.question("변의길이를 입력해주세요 :", o => {
              console.log(s(o)), console.log(l(o, t(o))), e.close()
            })
            break
          case "원":
            e.question("반지름의 길이를 입력해주세요 : ", r => {
              console.log(s(r)), console.log(l(r, o(r))), e.close()
            })
            break
          default:
            console.log(c), e.close()
        }
      }
    )
  })()
})()
