const Player = require('../player.js');

module.exports = {
    AUDIOPLAYER: {
        'GoogleAction.Finished'() {
            let index = this.$user.$data.currentIndex;
            let episode = Player.getNextEpisode(index);
            if (episode) {
                this.$user.$data.currentIndex -= 1;
                this.$googleAction.$audioPlayer.play(episode.url, episode.title);
                this.$googleAction.showSuggestionChips(['pause', 'start over']);
                this.ask('Enjoy');
            } else {
                this.tell('');
            }
        }
    },
}