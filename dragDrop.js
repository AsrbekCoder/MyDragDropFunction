const handleGetImg = (e) => {
  e.preventDefault();
  setImgHelp(e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]);
  let input = e.dataTransfer ? e.dataTransfer : e.target;
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    setUseImg(dataURL);
  };
  reader.readAsDataURL(input.files[0]);
  setGetFileName(input.files[0].name);
  console.log(input.files[0]);
};
