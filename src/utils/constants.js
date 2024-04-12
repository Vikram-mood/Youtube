
const GOOGLE_API_KEY="AIzaSyAbWXwpLiftbJQOqwo5gYJV7DD7PkEqUyg"
// export const VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?key="+GOOGLE_API_KEY+"HTTP/1.1"

export const VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;