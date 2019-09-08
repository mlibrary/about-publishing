# Content architecture

## Collections

### Pages

- Title [string]
- Body [markdown]
- Path [string]

### Books

- Title [string]
- Author [string]
- Image [object]
  - File [image]
  - Alt text [string]
- Description [text]

### Stories

- Title [string]
- Hero section [object]
  - Text [text]
  - Image [image]
- Author [string]
- Date [date]
- Categories [relation]
- Image [object]
  - File [image]
  - Alt text [string]
  - Caption [string]
  - Credit [string]
- Profiles [relation]
- Project partners [markdown]
- Related stories [relation]
- Body [markdown]

### Profiles

- Name [string]
- Title [string]
- Quote [text]

### Categories

- Title [string]

## Custom pages

### Homepage

- Hero section [object]
  - Heading [string]
  - Text [markdown]
  - Image [image]
- Highlight [object]
  - Heading [string]
  - Link text [string]
  - Link URL [string]
  - Image [image]
- Featured profile [relation]
- Featured stories [relation]
- Trending [list / string]
- Infographics section [object]
  - Heading [string]
  - Infographics [list]
    - Large text [string]
    - Small text [string]

## Config

### Contact info

- Address [markdown]
- Email [string]
- Contact page URL [string]
- Social links [list / string]
