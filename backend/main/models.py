from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField()

    def __str__(self):
        return self.title
