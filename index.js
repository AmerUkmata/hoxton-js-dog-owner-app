console.log(data);

// WRITE YOUR CODE BELOW!

function addDog(){
    let liEl = document.createElement('li')
    liEl.className = 'dogs-list__button dogs-list__button--add'
    liEl.textContent = '+'
    liEl.addEventListener('click', addDog2)
    let theul = document.querySelector('.dogs-list')
    theul.append(liEl)
}
addDog()

function hederDog(dog){
 let liEl = document.createElement('li')
 liEl.className = 'dogs-list__button'
 liEl.textContent = dog.name
 liEl.addEventListener('click', ()=>mainDog(dog))
 let theul = document.querySelector('.dogs-list')
 theul.append(liEl)
}
for(let dog of data){
    hederDog(dog)
}


function mainDog(dog){
    
    let h2El = document.createElement('h2')
    h2El.textContent = dog.name
    let imgEl = document.createElement('img')
    imgEl.src = dog.image

    let divEl = document.createElement('div')
    divEl.className = 'main__dog-section__desc'
    let h3El = document.createElement('h3')
    h3El.textContent = dog.bio
    let pEl = document.createElement('p')
    pEl.textContent = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,  minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum! '

    let div2El = document.createElement('div')
    div2El.className = 'main__dog-section__btn'
    let p2El = document.createElement('p')
    p2El.textContent = 'Is naughty?Yes!'
    let buttonEl = document.createElement('button')
    buttonEl.textContent = dog.isGoodDog

    let thesection = document.querySelector('.main__dog-section')
    thesection.textContent = ''
    thesection.append(h2El, imgEl, divEl, h3El, pEl, div2El, p2El, buttonEl)
    divEl.append(h3El, pEl)
    div2El.append(p2El, buttonEl)
    
}

function addDog2(){
    let h2El = document.createElement('h2')
    h2El.textContent = 'Add a new Dog'
    let formEl = document.createElement('form')
    formEl.className = 'form'
    
    let labelEl = document.createElement('label')
    labelEl.for = 'name'
    labelEl.textContent = 'Dogs name'
    let inputEl = document.createElement('input')
    inputEl.type = 'text'
    inputEl.id = 'name'
    inputEl.name = 'name'

    let label2El = document.createElement('label')
    label2El.for = 'image'
    label2El.textContent = 'Dogs picture'
    let input2El = document.createElement('input')
    input2El.type = 'url'
    input2El.id = 'image'
    input2El.name = 'image'

    let label3El = document.createElement('label')
    label3El.for = 'bio'
    label3El.textContent = 'Dogs bio'

    let textareaEl = document.createElement('textarea')
    textareaEl.rows = '5'
    textareaEl.id = 'bio'
    textareaEl.name = 'bio'

    let input3El = document.createElement('input')
    input3El.type = 'submit'
    input3El.id = 'submit'
    input3El.name = 'submit'
    input3El.value = 'Lets add a dog!'
    input3El.className = 'form__button'

    let thesection = document.querySelector('.main__dog-section')
    thesection.textContent = ''
    thesection.append(h2El, formEl, labelEl, inputEl, label2El , input2El , label3El , textareaEl , input3El)
    formEl.append(labelEl, inputEl, label2El, input2El, label3El, textareaEl, input3El)
}

// <!-- 
//   This is a template for the dog list item

//   <li class="dogs-list__button">Mr. Bonkers</li> 

// -->

// <!-- This is a template for the main dog card -->

// <!-- <section class="main__dog-section">
//         <h2>Mr. Bonkers</h2>
//         <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div class="main__dog-section__btn">
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>
//   </section>  -->

// <!-- 
//     This is a template for the add dog form

//     <section class="main__dog-section">
//       <h2>Add a new Dog</h2>
//       <form class="form">

//         <label for="name">Dog's name</label>
//         <input type="text" id="name" name="name">

//         <label for="image">Dog's picture</label>
//         <input type="url" id="image" name="image">

//         <label for="bio">Dog's bio</label>
//         <textarea rows="5" id="bio" name="bio"></textarea>

//         <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//       </form>
//   </section>
//    --></input>