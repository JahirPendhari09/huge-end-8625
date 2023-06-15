let container = document.getElementById("container");

let imageArr=[
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5e7b38168890935.64428b64e18c6.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/77ddc3168890935.64428b64e5c90.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ac705c168890935.64428b64e0d00.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1599cb168890935.64428b64e95ea.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/cbdfcd168890935.64428b64df143.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3f985f168890935.64428b64dbde3.png"
];

let count=0;

// display(imageArr);

// function display(data){
    for(let i=0; i<imageArr.length; i++) {
        let image= document.createElement("img");
        // image.src= imageArr[i];
        image.setAttribute("src",imageArr[i]);
        container.append(image)
    };
// }