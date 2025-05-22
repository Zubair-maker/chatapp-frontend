export const samepleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Alice Smith",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "Team Alpha",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Alice Smith",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Bob Johnson",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Alice Smith",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Bob Johnson",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Hello, how are you?",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "sender._id",
      name: "Charlie Adams",
    },
    chat: "chatId",
    createdAt: "2025-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Check this out!",
    _id: "sfnsdjkfsdnfkdddjsbnd",
    sender: {
      _id: "abcdefg",
      name: "Charlie Adams",
    },
    chat: "chatId",
    createdAt: "2025-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Alice Smith",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "alice_smith",
      friends: 20,
      groups: 5,
    },
    {
      name: "Bob Johnson",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "bob_johnson",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "Project Team",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Alice Smith",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Dev Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Bob Johnson",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Welcome to the team!",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Charlie Adams",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Here is the document.",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Charlie Adams",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
