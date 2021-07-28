'use strict';

const btnlist = document.querySelectorAll('.btn');
const inputValue = document.querySelector('input');
const vedioPage = document.querySelector('#vedio--call');

// const webSocket = new WebSocket('');
// const webSocket = new WebSocket('ws://SERVER-IP-HERE:3000');
let userName;

btnlist[0].addEventListener('click', function () {
  userName = inputValue.value;
  sendData({
    type: 'store_user', // 'store_offer' ,'store-candidates'
  });
});
function sendData(data) {
  data.userName = userName;
  webSocket.send(JSON.stringify(data));
}

let lcoalStream;
btnlist[1].addEventListener('click', function () {
  vedioPage.style.display = 'inline';
  // create vedio for local computer
  navigator.getUserMedia(
    {
      video: {
        frameRate: 24,
        width: {
          min: 480,
          ideal: 720,
          max: 1280,
        },
        aspectRatio: 1.33333,
      },
      audio: true,
    },
    stream => {
      localStream = stream;
      document.getElementById('local-video').srcObject = localStream;

      let configuration = {
        iceServers: [
          {
            urls: [
              'stun:stun.l.google.com:19302',
              'stun:stun1.l.google.com:19302',
              'stun:stun2.l.google.com:19302',
            ],
          },
        ],
      };

      peerConn = new RTCPeerConnection(configuration);
      peerConn.addStream(localStream);

      peerConn.onaddstream = e => {
        document.getElementById('remote-video').srcObject = e.stream;
      };

      peerConn.onicecandidate = e => {
        if (e.candidate == null) return;
        sendData({
          type: 'store_candidate',
          candidate: e.candidate,
        });
      };

      createAndSendOffer();
    },
    error => {
      console.log(error);
    }
  );
});
