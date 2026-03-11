# Syngenta Warehouse Management System

## Project Overview
This is a warehouse management application for Syngenta built with modern web technologies. The design philosophy combines Syngenta's brand identity with Apple's minimalist and intuitive design language.

## Brand Identity

### Colors (Syngenta Theme)
- **Primary**: `#702F8A` (Syngenta Purple/Magenta)
- **Secondary**: `#00A04A` (Syngenta Green)
- **Accent**: `#E20074` (Vibrant Magenta)
- **Neutral Light**: `#F5F5F7` (Apple-inspired light gray)
- **Neutral Dark**: `#1D1D1F` (Apple-inspired dark gray)
- **Text Primary**: `#1D1D1F`
- **Text Secondary**: `#6E6E73`

### Design Principles (Apple-Inspired)
- **Simplicity**: Clean interfaces with generous whitespace
- **Clarity**: Clear typography hierarchy (SF Pro, Inter, or system fonts)
- **Depth**: Subtle shadows and layering for visual hierarchy
- **Focus**: One primary action per screen
- **Consistency**: Uniform spacing, sizing, and interaction patterns
- **Fluidity**: Smooth transitions and animations (use Framer Motion where appropriate)

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: @hugeicons/react
- **Themes**: next-themes for dark mode support
- **Deployment**: Vercel

## Development Workflow

### Feature Development Process
1. **Start New Feature**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/descriptive-name
   ```

2. **Development**
   - Make changes incrementally
   - Test locally: `npm run dev`
   - Run type checks: `npm run typecheck`
   - Run linting: `npm run lint`
   - Format code: `npm run format`

3. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "feat: descriptive commit message"
   git push origin feature/descriptive-name
   ```

4. **Create Pull Request**
   - Use GitHub CLI to create PR:
   ```bash
   gh pr create --title "Feature: descriptive title" --body "Description of changes"
   ```
   - Or provide the user with the GitHub URL to create PR manually

5. **Deployment Review**
   - After pushing, Vercel automatically creates a preview deployment
   - Check deployment status:
   ```bash
   vercel ls
   ```
   - Share the Vercel preview URL from the PR with the user for review
   - The preview URL will be visible in the PR as a comment from Vercel bot

6. **User Approval and Merge**
   - **IMPORTANT**: Do NOT merge the PR automatically
   - Ask the user to review the changes and preview deployment
   - Once the user approves, ask them to merge the PR on GitHub
   - Or if user authorizes, merge via CLI:
   ```bash
   gh pr merge --merge
   ```

### Commit Convention
Follow conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `style:` - UI/styling changes
- `docs:` - Documentation updates
- `chore:` - Maintenance tasks

## Git and GitHub Workflow

### Branch Strategy
- `main` - Production branch (protected)
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `refactor/*` - Refactoring branches

### Pull Request Guidelines
- Always create a PR for review before merging to main
- Include a clear title and description of changes
- Reference any related issues
- Vercel will automatically comment with preview deployment URL
- Wait for user approval before merging

### GitHub CLI Commands
```bash
# Create PR
gh pr create --title "Title" --body "Description"

# List PRs
gh pr list

# View PR status
gh pr view

# Merge PR (only after user approval)
gh pr merge --merge
```

## Code Standards

### Component Structure
```typescript
// components/feature/ComponentName.tsx
import { cn } from "@/lib/utils"
import { ComponentProps } from "@/types"

export function ComponentName({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* Content */}
    </div>
  )
}
```

### File Organization
```
app/
  ├── (routes)/          # Route groups
  ├── layout.tsx         # Root layout
  ├── page.tsx          # Homepage
  └── globals.css       # Global styles

components/
  ├── ui/               # shadcn/ui components
  ├── features/         # Feature-specific components
  └── shared/          # Shared/common components

lib/
  ├── utils.ts         # Utility functions
  └── constants.ts     # Constants and config
```

### Styling Guidelines
- Use Tailwind utility classes
- Leverage shadcn/ui components for consistency
- Apply Syngenta brand colors via CSS variables in `globals.css`
- Use `cn()` utility for conditional classes
- Maintain consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)

### Component Best Practices
- Keep components small and focused (single responsibility)
- Use TypeScript for type safety
- Prefer composition over complex components
- Extract reusable logic into custom hooks
- Use React Server Components by default, add "use client" only when needed

### Accessibility
- Semantic HTML elements
- ARIA labels where necessary
- Keyboard navigation support
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators on interactive elements

## shadcn/ui Usage

### Adding Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### Customization
- Components are in `components/ui/`
- Modify as needed - they're yours to own
- Maintain consistent styling with brand colors

## Performance Guidelines
- Optimize images (use Next.js Image component)
- Lazy load components where appropriate
- Use React Server Components for static content
- Implement proper loading states
- Minimize client-side JavaScript

## Vercel Deployment

### Automatic Deployments
- GitHub integration automatically deploys on push
- Feature branches get preview deployments
- Main branch deploys to production

### Manual Check
```bash
# Check deployment status
vercel ls

# Get deployment URL
vercel inspect <deployment-url>
```

### Environment Variables
- Configure in Vercel dashboard or `.env.local` for development
- Never commit sensitive data to git

## Testing Approach
- Manual testing on preview deployments
- Browser compatibility: Chrome, Safari, Firefox, Edge
- Responsive testing: Mobile, tablet, desktop
- Dark mode verification

## Key Features to Implement
- Inventory management dashboard
- Stock level tracking
- Order processing
- Reporting and analytics
- User authentication and roles
- Real-time updates (consider WebSockets or Server-Sent Events)

## Notes
- Always create feature branches for new work
- Share Vercel preview URLs with stakeholders before merging
- Maintain the Apple-inspired minimalist aesthetic
- Ensure Syngenta brand colors are prominent but not overwhelming
- Prioritize user experience and intuitive navigation