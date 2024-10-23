module.exports = {
    rules: {
      'type-enum': [2, 'always', ['서영현', '조영진', '김예지', '석은규', '라대경', '서민석']],
      'header-pattern': [2, 'always', /^(서영현|조영진|김예지|석은규|라대경|서민석)\s?:\s?[0-9]{1,2}주차\s?.{0,50}$/],
      'subject-min-length': [2, 'always', 1],  // 최소 1글자 이상
      'subject-max-length': [2, 'always', 50]  // 최대 50글자 이하
    }
  };
  