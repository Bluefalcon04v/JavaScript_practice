// Event Delegation 
// instead of adding Event handler at each elements just add it once at the container/Parent Element. it will be followed on every child elements due to Event Bubbling effect.
document.querySelector('.container').addEventListener('click', (e)=>{
    console.log(e.target.id);
});