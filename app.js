gallery = [
    "https://sm.ign.com/ign_pk/review/g/god-of-war/god-of-war-ragnarok-review_v5s5.jpg",
    "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/10137177/49c7d29293f89dfef95969fde62f5c27e7cc780c.jpg?w=1600&h=900&fit=crop",
    "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1kt2x.jpg",
    "https://cdn.mos.cms.futurecdn.net/UcXeK6DWKBWdc3Ao4TZ9nU.jpg"
]

var currentIndex = 0
var currentImg = document.getElementById('imgSlider')
var prevButton = document.getElementById('previousBtn')
var nextButton = document.getElementById('nextBtn')

function nextImg(){
    currentIndex += 1
    currentImg.src = gallery[currentIndex]
    if(currentIndex == 1){
        prevButton.style.display = "inline"
    }
    if (currentIndex == 3){
        nextButton.style.display = "none"
    }

}
function prevImg(){
    currentIndex -= 1
    currentImg.src = gallery[currentIndex]
    if(currentIndex == 2){
        nextButton.style.display = "inline"
    }
    if(currentIndex == 0){
        prevButton.style.display = "none"
    }
}