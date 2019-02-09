Feature: Manage Pages
    As a user
    In order to enjoy interesting videos
    The user should be able to select videos from a homepage

    @focus
    Scenario: View homepage
        Given the user is on the "homepage"
        Then the page title should be "homepage"
# Then the user should be able to see a header
# And the user should be able to see a video_search_bar
# And the user should be able to see a featured_video_panel
# And the user should be able to see video_cards
# And the user should be able to see a footer
