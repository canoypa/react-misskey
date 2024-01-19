export type Note = {
  id: string;
  createdAt: string;
  deletedAt?: string | null;
  text: string | null;
  cw?: string | null;
  userId: string;
  user: User;
  replyId?: string | null;
  renoteId?: string | null;
  reply?: Note | null;
  renote?: Note | null;
  isHidden?: boolean;
  visibility: string;
  mentions?: string[];
  visibleUserIds?: string[];
  fileIds?: string[];
  files?: DriveFile[];
  tags?: string[];
  poll?: Record<string, never> | null;
  channelId?: string | null;
  channel?: {
    id: string;
    name: string;
    color: string;
    isSensitive: boolean;
    allowRenoteToExternal: boolean;
    userId: string | null;
  } | null;
  localOnly?: boolean;
  reactionAcceptance: string | null;
  reactions: Record<string, number>; //
  reactionEmojis: Record<string, string>; //
  renoteCount: number;
  repliesCount: number;
  uri?: string;
  url?: string;
  reactionAndUserPairCache?: string[];
  clippedCount?: number;
  myReaction?: Record<string, never> | null;
};

export type User = {
  id: string;
  name: string | null;
  username: string;
  host: string | null;
  avatarUrl: string | null;
  avatarBlurhash: string | null;
  avatarDecorations: {
    id: string;
    angle?: number;
    flipH?: boolean;
    url: string;
    offsetX?: number;
    offsetY?: number;
  }[];
  isBot?: boolean;
  isCat?: boolean;
  instance?: {
    name: string | null;
    softwareName: string | null;
    softwareVersion: string | null;
    iconUrl: string | null;
    faviconUrl: string | null;
    themeColor: string | null;
  };
  emojis: Record<string, never>;
  onlineStatus: "unknown" | "online" | "active" | "offline";
  badgeRoles?: {
    name: string;
    iconUrl: string | null;
    displayOrder: number;
  }[];
};

export type DriveFolder = {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  md5: string;
  size: number;
  isSensitive: boolean;
  blurhash: string | null;
  properties: {
    width?: number;
    height?: number;
    orientation?: number;
    avgColor?: string;
  };
  url: string;
  thumbnailUrl: string | null;
  comment: string | null;
  folderId: string | null;
  folder?: DriveFolder | null;
  userId: string | null;
  user?: User | null;
};

export type DriveFile = {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  md5: string;
  size: number;
  isSensitive: boolean;
  blurhash: string | null;
  properties: {
    width?: number;
    height?: number;
    orientation?: number;
    avgColor?: string;
  };
  url: string;
  thumbnailUrl: string | null;
  comment: string | null;
  folderId: string | null;
  folder?: DriveFolder | null;
  userId: string | null;
  user?: User | null;
};
