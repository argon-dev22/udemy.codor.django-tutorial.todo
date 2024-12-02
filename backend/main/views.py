from django.views.generic.list import ListView
from .models import Task
from django.http import JsonResponse

class Tasks(ListView):
    model = Task

    def get(self, request, *args, **kwargs):
        tasks = Task.objects.all().values()
        return JsonResponse(list(tasks), safe=False)

