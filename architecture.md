# Content architecture

## Collections

### Page
* Title [string]
* Body [markdown]
* URL [string]

### Book
* Title [string]
* Author [string]
* Image [object]
  * File [image]
  * Alt text [string]
* Description [text]

### Story
* Title [string]
* Hero section [object]
  * Text [text]
  * Image [image]
* Author [string]
* Date [date]
* Categories [select]
* Image [object]
  * File [image]
  * Alt text [string]
  * Caption [string]
  * Credit [string]
* Profiles [list / relation]
* Project partners [markdown]
* Related stories [list / related]
* Body [markdown]

### Profile
* Name [string]
* Title [string]
* Quote [text]

## Custom pages

### Homepage
* Hero section [object]
  * Heading [string]
  * Text [markdown]
  * Image [image]
* Highlight [object]
  * Heading [string]
  * Link text [string]
  * Link URL [string]
  * Image [image]
* Featured profile [relation]
* Featured stories [list / relation]
* Trending [list / string]
* Infographics section [object]
  * Heading [string]
  * Infographics [list]
    * Large text [string]
    * Small text [string]

## Config

### Contact info
* Address [markdown]
* Email [string]
* Contact page URL [string]
* Social links [list / string]