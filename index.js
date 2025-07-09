const boxContainer = document.getElementById('box-Container');
const fileInput = document.getElementById('fileInput');
const uploadedImage = document.getElementById('uploadedImage');
const placeholderText =document.getElementById('placeholderText');
const controls = document.getElementById('controls');
const changeButton = document.getElementById('changeButton');


boxContainer.addEventListener('click',()=>{
    fileInput.click();
});

fileInput.addEventListener('change', (event)=>{
    const file= event.target.files[0];
    if(file){
        const reader =new FileReader();
        uploadedImage.src=event.target.result;
        uploadedImage.style.display='block';
        placeholderText.style.display='none';
        controls.style.display='flex';
    };
    reader.readAsDataURL(file);
})

changeButton.addEventListener('click',()=>{
    fileInput.click();
});

removeButton.addEventListener('click',()=>{
    uploadedImage.src = '';
    uploadedImage.style.display = 'none';
    placeholderText.style.display = 'block';
    controls.style.display = 'none';
    fileInput.value = '';
})