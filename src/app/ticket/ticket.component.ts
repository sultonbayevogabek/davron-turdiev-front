import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './ticket.component.html'
})
export class TicketComponent implements AfterViewInit {
  @ViewChild('ticketToDownload') ticketElement: ElementRef;

  /* =====  M O C K   D A T A  ===== */
  ticketInfo = {
    seminarName: 'Angular Development Masterclass',
    speakerName: 'Anvar Turdiyev',
    speakerRole: 'Senior Angular Developer',
    speakerImage: 'https://picsum.photos/200', // demo photo
    date: '15-Iyun, 2023',
    time: '14:00',
    location: 'IT Park, Tashkent',
    seatNumber: '2-K',
    attendeeName: 'Abdullayev Jasur'
  };

  /** Loading flag */
  isGenerating = false;

  /** Store the clone of our ticket element */
  private ticketTemplate: HTMLElement;

  ngAfterViewInit(): void {
    // Once the view is initialized, create a copy of the ticket element
    this.ticketTemplate = this.ticketElement.nativeElement.cloneNode(true) as HTMLElement;
  }

  /**
   * Download ticket as image
   */
  downloadTicket(): void {
    this.isGenerating = true;

    // Get a fresh clone of the ticket element
    const clone = this.ticketTemplate.cloneNode(true) as HTMLElement;

    // Create temporary container
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-9999px';
    tempDiv.style.left = '-9999px';
    tempDiv.appendChild(clone);
    document.body.appendChild(tempDiv);

    // Process the element before rendering to replace Angular expressions with actual values
    this.processElement(clone);

    // Use html2canvas with the processed element
    html2canvas(clone, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: true
    })
    .then(canvas => {
      // Create and download the image
      const imageUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'seminar-ticket.png';
      link.click();
    })
    .catch(error => {
      console.error('Error generating ticket:', error);
    })
    .finally(() => {
      // Clean up
      document.body.removeChild(tempDiv);
      this.isGenerating = false;
    });
  }

  /**
   * Process the cloned element to replace Angular expressions with actual values
   */
  private processElement(element: HTMLElement): void {
    // Replace Angular expressions in the HTML with actual values
    element.innerHTML = element.innerHTML
      .replace(/{{ ticketInfo\.attendeeName }}/g, this.ticketInfo.attendeeName)
      .replace(/{{ ticketInfo\.seminarName }}/g, this.ticketInfo.seminarName)
      .replace(/{{ ticketInfo\.speakerName }}/g, this.ticketInfo.speakerName)
      .replace(/{{ ticketInfo\.speakerRole }}/g, this.ticketInfo.speakerRole)
      .replace(/{{ ticketInfo\.date }}/g, this.ticketInfo.date)
      .replace(/{{ ticketInfo\.time }}/g, this.ticketInfo.time)
      .replace(/{{ ticketInfo\.seatNumber }}/g, this.ticketInfo.seatNumber)
      .replace(/{{ ticketInfo\.location }}/g, this.ticketInfo.location);

    // Fix the src attribute for the image
    const speakerImg = element.querySelector('img');
    if (speakerImg) {
      speakerImg.src = this.ticketInfo.speakerImage;
    }
  }
}
