import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'intro-1',
    title: 'The Board',
    description: 'Learn about the 64 squares.',
    type: 'tutorial',
    icon: 'Grid',
    color: 'duo-green',
    status: 'available',
    content: {
      steps: [
        {
          id: 's1',
          type: 'explanation',
          text: 'Welcome to ChessLingo! The chess board is an 8x8 grid of 64 squares.',
          fen: '4k3/8/8/8/8/8/8/4K3 w - - 0 1'
        },
        {
          id: 's2',
          type: 'explanation',
          text: 'Squares are identified by coordinates, like e4 or h8.',
          fen: '4k3/8/8/8/8/8/8/4K3 w - - 0 1'
        }
      ]
    }
  },
  {
    id: 'intro-2',
    title: 'The Pawn',
    description: 'The humble foot soldier.',
    type: 'tutorial',
    icon: 'ChevronUp',
    color: 'duo-green',
    status: 'locked',
    content: {
      steps: [
        {
          id: 's1',
          type: 'explanation',
          text: 'Pawns move one square forward, but on their first move they can move two!',
          fen: '4k3/8/8/8/8/8/4P3/4K3 w - - 0 1'
        },
        {
          id: 's2',
          type: 'interaction',
          text: 'Try moving the pawn to e4!',
          fen: '4k3/8/8/8/8/8/4P3/4K3 w - - 0 1',
          targetMove: 'e4'
        }
      ]
    }
  },
  {
    id: 'intro-3',
    title: 'The Knight',
    description: 'The jumping horse.',
    type: 'tutorial',
    icon: 'Zap',
    color: 'duo-green',
    status: 'locked'
  },
  {
    id: 'intro-4',
    title: 'Checkmate!',
    description: 'How to win the game.',
    type: 'puzzle',
    icon: 'Trophy',
    color: 'duo-yellow',
    status: 'locked'
  },
  {
    id: 'mid-1',
    title: 'The Bishop',
    description: 'Diagonal power.',
    type: 'tutorial',
    icon: 'Zap',
    color: 'duo-blue',
    status: 'locked'
  },
  {
    id: 'mid-2',
    title: 'The Rook',
    description: 'Straight lines.',
    type: 'tutorial',
    icon: 'Square',
    color: 'duo-blue',
    status: 'locked'
  },
  {
    id: 'mid-3',
    title: 'The Queen',
    description: 'The most powerful piece.',
    type: 'tutorial',
    icon: 'Crown',
    color: 'duo-blue',
    status: 'locked'
  }
];
