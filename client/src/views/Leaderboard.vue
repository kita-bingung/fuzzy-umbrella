<template>
  <section id="ladderBoard">
        <div class="box" style="margin: 0 auto; width: 40%;">
            <div class="box" style="background-color: aquamarine; width: 100%;">
                <h1 style="text-align: center;">LeaderBoard</h1>
            </div>
            <div class="wrapper" style=" padding: 10px 16px">
                <div class="item" style="padding: 10px 16px">
                    <div class="box" style="display: flex;">
                        <div style="padding: 10px;">
                            <img style="border-radius: 50%"
                                src="https://s.blanja.com/picspace/211/294099/800.800_9bb693b3961d4ffbb8341eb473e7cd3c.jpg"
                                alt="pokemon" height="50" width="50">
                        </div>
                        <div>
                            <h3>Nama</h3>
                        </div>
                    </div>
                </div>
                <div class="item" style="padding: 10px 16px">
                    <div class="box" style="display: flex;">
                        <div style="padding: 10px;">
                            <img style="border-radius: 50%"
                                src="https://s.blanja.com/picspace/211/294099/800.800_9bb693b3961d4ffbb8341eb473e7cd3c.jpg"
                                alt="pokemon" height="50" width="50">
                        </div>
                        <div>
                            <h3>Nama</h3>
                        </div>
                    </div>
                </div>
                <div class="item" style="padding: 10px 16px">
                    <div class="box" style="display: flex;">
                        <div style="padding: 10px;">
                            <img style="border-radius: 50%"
                                src="https://s.blanja.com/picspace/211/294099/800.800_9bb693b3961d4ffbb8341eb473e7cd3c.jpg"
                                alt="pokemon" height="50" width="50">
                        </div>
                        <div>
                            <h3>Nama</h3>
                        </div>
                    </div>
                </div>
                <div class="item" style="padding: 10px 16px">
                    <div class="box" style="display: flex;">
                        <div style="padding: 10px;">
                            <img style="border-radius: 50%"
                                src="https://s.blanja.com/picspace/211/294099/800.800_9bb693b3961d4ffbb8341eb473e7cd3c.jpg"
                                alt="pokemon" height="50" width="50">
                        </div>
                        <div>
                            <h3>Nama</h3>
                        </div>
                    </div>
                </div>
                <div class="item" style="padding: 10px 16px">
                    <div class="box" style="display: flex;">
                        <div style="padding: 10px;">
                            <img style="border-radius: 50%"
                                src="https://s.blanja.com/picspace/211/294099/800.800_9bb693b3961d4ffbb8341eb473e7cd3c.jpg"
                                alt="pokemon" height="50" width="50">
                        </div>
                        <div>
                            <h3>Nama</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Leaderboard'
}
</script>

<style>
    .box {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 25px
        }

        .wrapper {
            max-height: 350px;
            max-width: 600px;
            overflow-x: auto;
            padding: 15px;
            border: none;
        }

        .wrapper::-webkit-scrollbar {
            width: 0;
        }

        .wrapper .item {
            color: black
        }
</style>
