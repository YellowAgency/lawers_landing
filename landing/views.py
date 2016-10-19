from django.views.generic import CreateView, TemplateView
from django_ajax.mixin import AJAXMixin

from landing.forms import ClaimForm


class Index(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super(Index, self).get_context_data(**kwargs)
        context['form'] = ClaimForm()
        return context


class ProcessForm(AJAXMixin, CreateView):
    form_class = ClaimForm

    def form_valid(self, form):
        self.object = form.save()
        return {'obj': self.object}

    def form_invalid(self, form):
        return form.errors.as_json(escape_html=True)
