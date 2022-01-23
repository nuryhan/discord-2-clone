module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg:"#36393f",
        discord_serversBg: "#202225",
        discord_channelsBg: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
        discord_chatBg: "#36393f",
        discord_chatHeaderIcon: "#72767d",
        discord_chatHeaderInputBg: "#202225",
        discord_chatInputBg: "#40444b",
        discord_chatInputText: "#dcddde",
        discord_chatInput: "#72767d",
        discord_messageBg: "#32353b",
        discord_messageTimestamp: "#72767d",
        discord_message: "#dcddde",
        discord_deleteIcon: "#ed4245",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
