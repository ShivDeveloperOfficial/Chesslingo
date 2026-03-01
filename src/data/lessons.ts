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
    status: 'locked',
    content: {
      steps: [
        {
          id: 's1',
          type: 'explanation',
          text: 'The Knight moves in an "L" shape: two squares in one direction and then one square perpendicular.',
          fen: '4k3/8/8/8/8/2N5/8/4K3 w - - 0 1'
        },
        {
          id: 's2',
          type: 'multiple-choice',
          text: 'Can the Knight jump over other pieces?',
          options: ['Yes, it is the only piece that can jump!', 'No, it must have a clear path.', 'Only if it is a friendly piece.'],
          correctOption: 0,
          fen: '4k3/8/8/8/3p4/2N5/8/4K3 w - - 0 1'
        }
      ]
    }
  },
  {
    id: 'intro-4',
    title: 'Checkmate!',
    description: 'How to win the game.',
    type: 'puzzle',
    icon: 'Trophy',
    color: 'duo-yellow',
    status: 'locked',
    content: {
      steps: [
        {
          id: 's1',
          type: 'explanation',
          text: 'Checkmate happens when the King is under attack and has no way to escape.',
          fen: 'R3k3/R7/8/8/8/8/8/4K3 w - - 0 1'
        },
        {
          id: 's2',
          type: 'interaction',
          text: 'Move the Rook to a8 to deliver checkmate!',
          fen: '4k3/R7/R7/8/8/8/8/4K3 w - - 0 1',
          targetMove: 'a8'
        }
      ]
    }
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
