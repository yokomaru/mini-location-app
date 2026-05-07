import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="geolocation"
export default class extends Controller {
  // connect() {

  // }
  static targets = ["position", "status", "latitude", "longitude"]


  // 位置情報取得成功した時の処理
  // latitude 緯度を変数にセット
  // longitude 軽度を変数にセット
  // pタグをリセット
  // pタグに位置情報を取得
  success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position)

    this.statusTarget.textContent = "";
    //this.positionTarget.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    this.positionTarget.textContent = `緯度: ${latitude}°、経度: ${longitude}°`;
    this.latitudeTarget.value = latitude
    this.longitudeTarget.value = longitude
  }

  // 失敗した時の処理
  // エラーメッセージを返す
  error(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
    this.statusTarget.textContent = "位置情報取得できまへん"
  }


  // 失敗した時の処理
  // エラーメッセージを返す
  hello(){
    console.log("helloooo")
  }

  // ボタンを押した時の処理
  fetchPosition() {
    if (!navigator.geolocation) {
      this.statusTarget.textContent = "このブラウザーは位置情報に対応していません";
    } else {
      this.statusTarget.textContent = "位置情報を取得中…";
      navigator.geolocation.getCurrentPosition((position) => this.success(position), (error) => this.error(error));
    }

  }
}