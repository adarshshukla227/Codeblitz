
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage('You: ' + userMessage, 'user');
            chatInput.value = '';
            setTimeout(() => {
                appendMessage('AI Mentor: ' + getAIResponse(userMessage), 'ai');
            }, 500);
        }
    }
});

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(userMessage) {
    const responses = [
        "Can you elaborate on that?",
        "Here’s a resource that might help: [link]",
        "Let me connect you with a tutor for further assistance.",
        "I’m here to help! What else can I assist you with?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Video Call Integration (Using Agora API)
const startCallButton = document.getElementById('start-call');
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');

startCallButton.addEventListener('click', async () => {
    const AgoraRTC = await import('agora-rtc-sdk-ng');
    const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

    const APP_ID = 'YOUR_AGORA_APP_ID'; // Replace with your Agora App ID
    const TOKEN = 'YOUR_AGORA_TOKEN'; // Replace with your Agora Token
    const CHANNEL = 'mentor-guide'; // Replace with your channel name

    await client.join(APP_ID, CHANNEL, TOKEN, null);

    const localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    localVideo.srcObject = new MediaStream([localTracks[1].getMediaStreamTrack()]);
    await client.publish(localTracks);

    client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
            remoteVideo.srcObject = new MediaStream([user.videoTrack.getMediaStreamTrack()]);
        }
    });
});