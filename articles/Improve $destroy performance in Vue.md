# Improve $destroy performance in Vue

- [Статья](https://medium.com/@przemyslaw.jan.beigert/improve-destroy-performance-in-vue-47e212abe135)
- [Бэкап](./files/Improve%20$destroy%20performance%20in%20Vue.png)

## Выжимка

Суть сей басни такова, что процесс удаления "связки" со стором может быть долгим.
И лучше сделать обработку айтемов в родительском компоненте и передать в пропс 🤔(что не оч. краше)
