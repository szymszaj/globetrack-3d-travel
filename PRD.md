# Travel Globe - Interactive Travel Experience Tracker

A modern web application for tracking and visualizing personal travel experiences through an interactive 3D globe interface.

**Experience Qualities**:
1. **Immersive** - Users feel like they're exploring the world through an interactive 3D globe that responds naturally to their touch
2. **Personal** - Each user's travel story is uniquely theirs, with private data and personalized statistics that celebrate their journey
3. **Intuitive** - Complex globe interactions feel effortless, with smooth animations and clear visual feedback guiding every action

**Complexity Level**: Light Application (multiple features with basic state)
The app provides interactive globe visualization, user authentication, CRUD operations for travel entries, and statistics tracking, but maintains focus on the core travel logging experience without overwhelming complexity.

## Essential Features

### Interactive 3D Globe
- **Functionality**: Render an interactive 3D Earth using Three.js with smooth rotation, zoom, and click detection
- **Purpose**: Provides an engaging, spatial way to visualize and interact with travel data
- **Trigger**: App loads, globe appears as primary interface element
- **Progression**: Globe loads → User rotates/zooms → User clicks location → Pin placement interface appears → User adds travel details → Pin appears on globe
- **Success criteria**: Globe renders smoothly at 60fps, responds to mouse/touch input within 50ms, accurately maps click coordinates to geographic locations

### Travel Pin Management
- **Functionality**: Add, edit, and delete travel pins with location data, dates, descriptions, and optional photos
- **Purpose**: Captures and preserves travel memories in a structured, searchable format
- **Trigger**: User clicks on globe location or existing pin
- **Progression**: Location click → Details panel slides up → User fills form (name, date, description, photo) → Save → Pin appears on globe → Panel shows confirmation
- **Success criteria**: All CRUD operations complete within 2 seconds, data persists between sessions, photos upload and display correctly

### Travel Statistics Dashboard
- **Functionality**: Display visited countries count, world percentage visited, continents covered, and total cities
- **Purpose**: Gamifies travel experience and provides meaningful progress tracking
- **Trigger**: Data updates when new pins are added or removed
- **Progression**: User adds pin → Statistics recalculate → Progress bars animate to new values → Milestone celebrations trigger for significant achievements
- **Success criteria**: Statistics update in real-time, calculations are accurate based on UN country list, progress animations feel satisfying

### User Authentication & Data Privacy
- **Functionality**: Secure user login/signup with isolated data storage per user
- **Purpose**: Protects personal travel data and enables multi-user access
- **Trigger**: App launch for unauthenticated users, or manual login/logout
- **Progression**: Landing page → Login/signup form → Authentication → Personal globe with user's data loads
- **Success criteria**: Authentication completes within 3 seconds, users only see their own data, sessions persist appropriately

## Edge Case Handling
- **Offline Mode**: Cache globe and existing pins, queue new additions for sync when online
- **Invalid Coordinates**: Validate click coordinates and prevent pins in oceans or invalid locations
- **Image Upload Failures**: Graceful fallback to text-only entries with retry options
- **Globe Loading Errors**: Display 2D fallback map if WebGL/Three.js fails to initialize
- **Mobile Performance**: Reduce globe detail on lower-end devices while maintaining functionality

## Design Direction
The design should feel like a premium developer tool - sophisticated, dark, and focused - similar to GitHub's interface but with the warmth of personal travel memories.

## Color Selection
Complementary (opposite colors) - Using GitHub's dark theme as foundation with warm travel-inspired accents to balance the technical feel with wanderlust emotion.

- **Primary Color**: GitHub Blue (#58a6ff) - Trust, technology, and clear action prompts for main interactions
- **Secondary Colors**: Dark grays (#0d1117 background, #21262d cards) for sophisticated, distraction-free interface
- **Accent Color**: Warm Orange (#f85149) for travel pins and achievement highlights, evoking sunset destinations
- **Foreground/Background Pairings**: 
  - Background (Dark #0d1117): White text (#f0f6fc) - Ratio 15.8:1 ✓
  - Card (#21262d): Light gray text (#e6edf3) - Ratio 12.6:1 ✓
  - Primary (GitHub Blue #58a6ff): White text (#ffffff) - Ratio 4.9:1 ✓
  - Accent (Warm Orange #f85149): White text (#ffffff) - Ratio 4.6:1 ✓

## Font Selection
Clean, technical typography that maintains readability while supporting the professional developer aesthetic with subtle personality for travel content.

- **Typographic Hierarchy**:
  - H1 (App Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/24px/normal spacing
  - H3 (Pin Titles): Inter Medium/18px/normal spacing
  - Body (Descriptions): Inter Regular/16px/relaxed line height 1.6
  - UI Labels: Inter Medium/14px/tight spacing
  - Statistics: Inter Bold/20px/tabular numbers

## Animations
Purposeful motion that enhances the spatial nature of globe interaction while maintaining GitHub's subtle, efficient animation philosophy.

- **Purposeful Meaning**: Globe rotation feels natural and physics-based, panel transitions slide smoothly to maintain spatial context, pin appearances celebrate discovery moments
- **Hierarchy of Movement**: Globe interactions (highest priority) → Panel slides → Statistics counters → Hover states (lowest priority)

## Component Selection
- **Components**: 
  - Dialog for pin creation/editing forms with backdrop blur
  - Card for travel pin details with subtle shadows
  - Progress bars for statistics with animated fills
  - Button variants for primary (add pin) and secondary (edit/delete) actions
  - Avatar for user profile integration
  - Skeleton loaders for globe and data loading states

- **Customizations**: 
  - Custom Three.js globe component with country detection
  - Animated counter components for statistics
  - Custom pin marker overlay system for globe
  - Sliding detail panel with smooth height transitions

- **States**: 
  - Buttons: Default dark, hover lighter, active pressed, disabled muted
  - Globe: Default interactive, loading skeleton, error fallback
  - Pins: Default visible, hover highlighted, selected active

- **Icon Selection**: 
  - MapPin for travel locations
  - Plus for adding new entries
  - Edit/Pencil for modification
  - Trash for deletion
  - Globe for main navigation
  - TrendingUp for statistics

- **Spacing**: 
  - Container padding: p-6 (24px)
  - Card spacing: p-4 (16px) 
  - Button padding: px-4 py-2 (16px/8px)
  - Element gaps: gap-4 (16px) standard, gap-2 (8px) tight

- **Mobile**: 
  - Globe scales to full width with touch controls
  - Detail panel becomes full-screen modal on mobile
  - Statistics stack vertically with larger touch targets
  - Navigation collapses to hamburger menu
  - Simplified globe rendering for performance