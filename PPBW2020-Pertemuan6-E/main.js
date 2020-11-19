function insert(num){
    document.form.hasil.value = document.form.hasil.value+num;
}

function equal(){
    const exp = document. form.hasil.value;
    if(exp){
        document.form.hasil.value = eval(exp);
    }
}

function clean(){
    document.form.hasil.value = "";
}

function back(){
    const exp = document.form.hasil.value;
    document.form.hasil.value = exp.substring(0,exp.length-1);
}

function insert(num){
    if (num == 'pangkat') {
      document.form.hasil.value = Math.pow(document.form.hasil.value, 2);
    } else if (num == "%") {
        document.form.hasil.value = document.form.hasil.value/100;
    } else {
        document.form.hasil.value = document.form.hasil.value+num;
      }
  }