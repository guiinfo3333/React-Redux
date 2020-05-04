export  function toggleLesson(module,lesson){
    return {
        type : 'TOGGLE_LESSON',   //defino o nome da acao que tem q ser única
        module,  
        lesson,
    };
}