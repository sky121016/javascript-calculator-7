import {Console} from "@woowacourse/mission-utils";


class App {
  async run() {

    try{
      let delimiters = [',',':'];

      // 입력
      const input = await this.getInput();
      // Console.print(input);

      // 커스텀 구분자 파싱 후 숫자 입력만 반환
      const inputNumbers = await this.customDelimiter(input, delimiters);
      // Console.print(inputNumbers);

      // 숫자 파싱

      // 합계 연산

      // 결과 출력


    }catch(error){

    }
  }

  // 입력
  async getInput(){
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return input;
  }


  // 커스텀 구분자 처리
  async customDelimiter(input, delimiters){
    
    let s = 0;
    let e = 2;
    
    // 앞부분에서 // 와 \n 사이에 있으면 모두 구분자
    while (input.substring(s, e) == "//" && e < input.length) {
      while (e < input.length && input.substring(e, e + 2) !== "\\n") {
        e++;
      }
      
      const newDelimiter = input.substring(s + 2, e);

      // 구분자 배열에 push
      delimiters.push(newDelimiter);

      // index 재설정
      s = e + 2;
      e = s + 2;
    }

    const inputNumbers = input.substring(s);
    return inputNumbers;
  }

}

export default App;
