const data=[
    {
        question:"states in india",
        a:'23',
        b:'29',
        c:'31',
        d:'28',
        correct:'b'
    },{
        question:"countires in asia",
        a:'45',
        b:'54',
        c:'48',
        d:'41',
        correct:'c'
    },{
        question:"largest country",
        a:'china',
        b:'india',
        c:'US',
        d:'russia',
        correct:'d'
    }
];

const quiz=document.getElementById("quiz");
const answersEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitbtn=document.getElementById("submit")

let currentquiz=0;
let score=0;
loadquiz();

function loadquiz(){
    deselectAnswer();
    const currentquizdata=data[currentquiz];

    questionEl.innerText=currentquizdata.question;

    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
   
}

function selected(){
    const answersEls=document.querySelectorAll('.answer');
    let answer=undefined;
    answersEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;

}

function deselectAnswer(){
    answersEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });

}

submitbtn.addEventListener("click",()=>{
    
    const answer=selected();
    console.log(answer);
    
    if(answer){
        if(answer === data[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if(currentquiz<data.length)
    {
        loadquiz();
    }else{
        quiz.innerHTML=`<h2> Answered correct ${score}/${data.length}</h2> <button onclick="location.reload()">Reload</button>`
    }  
    }

});
