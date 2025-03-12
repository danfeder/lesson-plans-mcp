# Lesson Plans MCP

An MCP (Multi-Capability Program) to help create and manage a database of lesson plans stored on Google Drive.

## Features

- Create, read, update, and delete lesson plans
- Organize lesson plans by subject, grade level, standards, and more
- Store lesson plans in Google Drive
- Search and filter lesson plans using various criteria
- Export and share lesson plans

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/danfeder/lesson-plans-mcp.git
   cd lesson-plans-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

4. Set up Google API credentials:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google Drive API
   - Create OAuth 2.0 credentials (Web Application type)
   - Add the redirect URI: `http://localhost:3000/auth/google/callback`
   - Copy the Client ID and Client Secret to your `.env` file

## Usage

1. Start the MCP:
   ```bash
   npm start
   ```

2. Follow the prompts to authenticate with Google Drive and start managing your lesson plans.

## Commands

The MCP supports the following commands:

- `create` - Create a new lesson plan
- `list` - List all lesson plans
- `view` - View a specific lesson plan
- `edit` - Edit a lesson plan
- `delete` - Delete a lesson plan
- `search` - Search for lesson plans
- `export` - Export a lesson plan to various formats
- `help` - Show available commands

## Data Structure

Lesson plans are stored with the following structure:

```json
{
  "id": "unique-id",
  "title": "Lesson Plan Title",
  "subject": "Subject",
  "gradeLevel": ["Grade 1", "Grade 2"],
  "duration": "45 minutes",
  "objectives": ["Objective 1", "Objective 2"],
  "standards": ["Standard 1", "Standard 2"],
  "materials": ["Material 1", "Material 2"],
  "procedure": ["Step 1", "Step 2"],
  "assessment": "Assessment method",
  "extensions": "Extension activities",
  "notes": "Additional notes",
  "fileId": "google-drive-file-id",
  "createdAt": "2025-03-11T00:00:00.000Z",
  "updatedAt": "2025-03-11T00:00:00.000Z"
}
```

## License

MIT