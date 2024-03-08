import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
 
  title = 'my-new';
  message = 'designed';
  textColor: string = '';
  empName = '';
  fontSize: number = 16;
  selectedCity = '';
  countries = [
    'India',
    'USA',
    'Pakistan',
    'Sri Lanka',
    'China',
    'Japan'
  ];
  employee = [
    { name: 'ravi', id: 101, city: 'sangareddy' },
    { name: 'dev', id: 102, city: 'warangal' },
    { name: 'emmu', id: 103, city: 'medchal' },
    { name: 'abhi', id: 104, city: 'medchal' },
    { name: 'nittu', id: 105, city: 'siddipet' },
    { name: 'rabbit', id: 106, city: 'sangareddy' },
    { name: 'kitt', id: 107, city: 'sangareddy' },
  ];
  present = 'admin1';
  filteredEmployees: any[] = [...this.employee];
  filterCity: any[] = [...this.employee];

  textColors(color: string) {
    this.textColor = color;
  }

  fontChange(size: string) {
    this.fontSize = parseInt(size);
  }

  change() {
    this.message = 'new message';
  }

  employeeName(name: string) {
    this.empName = name;
    if (this.empName.trim() === '') {
      this.filteredEmployees = [...this.employee];
      return;
    }

    this.filteredEmployees = this.employee.filter(empl =>
      empl.name.toLowerCase().includes(this.empName.toLowerCase())
    );
  }

  updateFilteredEmployees() {
    if (this.selectedCity) {
      this.filteredEmployees = this.employee.filter(emp =>
        emp.city.toLowerCase() === this.selectedCity.toLowerCase()
      );
    } else {
      this.filteredEmployees = [...this.employee];
    }
  }

  submit() {
    alert(this.message);
  }
}
